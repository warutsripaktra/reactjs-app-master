import {
    Container,
    TextInput,
    Button,
    Group,
    Box,
    PasswordInput,
  } from "@mantine/core";
  import { useForm } from "@mantine/form";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  
  function BookAdd() {
    const navigate = useNavigate();
  
    const form = useForm({
      initialValues: {
        name: "",
        author: "",
        category: 0,
        picture: "",
      },
      validate: {
        name: (value) =>
          value.length < 2 ? "Name must have at least 2 letters" : null,
        
      },
    });
  
    return (
      <>
        <Container>
          <Box maw={500} mx="auto">
            <form
              onSubmit={form.onSubmit(async (values) => {
                const response = await axios.post(
                  "http://localhost/BookAdd/book.php",
                  {
                    name: values.name,
                    author: values.author,
                    category: values.category,
                    picture: values.picture,
                  }
                );
                alert("สมัครสมาชิกเรียบร้อย");
                navigate("/client");
              })}
            >
              {" "}
              <TextInput
                withAsterisk
                label="ชื่อหนังสือ"
                placeholder="กรุณากรอกชือหนังสือ"
                {...form.getInputProps("name")}
              />
              <TextInput
                withAsterisk
                label="ผู้แต่ง"
                placeholder="ชื่อ - สกุล "
                {...form.getInputProps("author")}
              />
              <TextInput
                withAsterisk
                label="หมวดหมู่"
                placeholder="หมวดหมู่หนังสือ"
                {...form.getInputProps("category")}
              />
              <TextInput
                type="text"
                withAsterisk
                label="รูปภาพ "
                placeholder="URL"
                {...form.getInputProps("picture")}
              />
              
              <Group position="right" mt="md">
                <Button type="submit">เพิ่ม</Button>
              </Group>
            </form>
          </Box>
        </Container>
      </>
    );
  }
  
  export default BookAdd;
  