import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Container,
  NumberInput,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function EditClient() {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const [datauser, setDatauser] = useState<any>([]);
  const getData = async (uid: any) => {
    const res = await axios.get(`http://localhost/phpapi/member.php?id=${uid}`);
    form.setValues(res.data);
  };
  useEffect(() => {
    getData(id);
  }, [id]);

  const schema = Yup.object().shape({
    fullname: Yup.string(),
    email: Yup.string(),
    age: Yup.number(),
    picture: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const form = useForm({
    validate: yupResolver(schema),
  });

  return (
    <>
      <Container>
        <Card>
          <Box maw={320} mx="auto">
            <form
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={form.onSubmit(async (values) => {
                const response = await axios.put(
                  "http://localhost/phpapi/member.php",
                  {
                    id: id,
                    fullname: values.fullname,
                    email: values.email,
                    age: Number(values.age),
                    picture: values.picture,
                    password: values.password,
                  }
                );
                alert("บันทึกข้อมูลเรียบร้อย");
                navigate("/client");
              })}
            >
              <TextInput
                label="Name"
                placeholder="Name"
                {...form.getInputProps("fullname")}
              />
              <TextInput
                mt="sm"
                label="Email"
                placeholder="Email"
                name="name"
                {...form.getInputProps("email")}
              />
              <NumberInput
                mt="sm"
                label="Age"
                placeholder="Age"
                min={0}
                max={99}
                {...form.getInputProps("age")}
              />
              <TextInput
                label="Picture"
                placeholder="URL รูปภาพ"
                {...form.getInputProps("picture")}
              />
              <PasswordInput
                label="Password"
                placeholder="Password"
                {...form.getInputProps("password")}
              />

              <PasswordInput
                mt="sm"
                label="Confirm password"
                placeholder="Confirm password"
                {...form.getInputProps("confirmPassword")}
              />
              <Button type="submit" mt="sm">
                Submit
              </Button>
            </form>
          </Box>
        </Card>
      </Container>
    </>
  );
}

export default EditClient;
