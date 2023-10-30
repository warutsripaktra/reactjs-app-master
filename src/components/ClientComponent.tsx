import {
  ActionIcon,
  Container,
  Group,
  Table,
  Title,
  Text,
  Button,
  Center,
  Image,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  IconEdit,
  IconPrinter,
  IconTrash,
  IconUser,
} from "@tabler/icons-react";
import { ModalsProvider, modals } from "@mantine/modals";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { color } from "html2canvas/dist/types/css/types/color";

function ClientComponent() {
  const [clients, setClients] = useState([]);
  const pdfRef = useRef();
  useEffect(() => {
    axios
      .get("http://localhost/BookAdd/book.php")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(clients);

  const rows = clients.map((element: any) => (
    <tr key={element.id}>
      <td>{element.name}</td>
      <td>{element.author}</td>
      <td>{element.category}</td>
      
      <td><Image withPlaceholder maw = {120} mx = "auto" radius="md" src = {element.picture} /></td>
      <td>
        <Group>
          <Link to={`/client/${element.id}`}>
            <ActionIcon variant="filled">
              <IconUser size="1rem" />
            </ActionIcon>
          </Link>

          <Link to={`/edit/${element.id}`}>
            <ActionIcon variant="outline" component="a" href="#" color="green">
              <IconEdit size="1rem" />
            </ActionIcon>
          </Link>
          <ActionIcon
            variant="filled"
            onClick={() => openDeleteModal(element.id)}
          >
            <IconTrash size="1rem" />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));
  const openDeleteModal = (id: any) =>
    modals.openConfirmModal({
      title: "Delete your profile",
      centered: true,
      children: <Text size="sm">คุณต้องการลบรายการนี้ ? {id}</Text>,
      labels: { confirm: "Delete account", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: async () => {
        const res = await axios.delete(
          `http://localhost/BookAdd/book.php?id=${id}`
        );
        location.replace("/client");
      },
    });
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("client.pdf");
    });
  };
  return (
    <>
      <ModalsProvider labels={{ confirm: "Submit", cancel: "Cancel" }}>
        <Container ref={pdfRef}>
          <Title variant="gradient"
                gradient={{ from: "green", to: "cyan", deg: 45 }}
                sx={{ fontFamily: "Greycliff CF, Trixie Plain" }}
                ta="center"
                fz="2xl"
                fw={700} >ประวัติการเข้าอ่าน</Title>
          <Table>
            <thead>
              <tr>
                <td>ชื่อหนังสือ</td>
                <td>ผู้แต่ง</td>
                <td>หมวดหมู่</td>
                <td>รูปภาพ</td>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
          <Center>
            <Button onClick={downloadPDF} leftIcon={<IconPrinter />}>
              Print PDF
            </Button>
          </Center>
        </Container>
      </ModalsProvider>
    </>
  );
}

export default ClientComponent;
