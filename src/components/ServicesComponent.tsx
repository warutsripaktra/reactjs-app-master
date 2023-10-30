import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";

const mockdata = [
  {
    title: "นิตยสาร",
    description:
      "สิ่งพิมพ์รายคาบที่ออกเป็นระยะสำหรับผู้อ่านทั่วไป มีเนื้อหาหลากหลาย มุ่งทั้งให้ความรู้และความบันเทิง ความรู้มักเป็นไปในลักษณะที่ให้ความรอบรู้ มีการหารายได้จากการโฆษณาและวางขายทั่วไป ผู้อ่านสามารถบอกรับเป็นสมาชิกได้",
    icon: IconGauge,
  },
  {
    title: "นิยาย",
    description:
      "เป็นรูปแบบหนึ่งของวรรณกรรมลายลักษณ์ แต่งในรูปของร้อยแก้ว มีลักษณะแตกต่างจากเรื่องแต่งแบบเดิม ที่เรียกว่านิทาน",
    icon: IconUser,
  },
  {
    title: "วรรณกรรม",
    description:
      "เป็นประเภทหนึ่งของหนังสือที่มีเนื้อหาเป็นเรื่องราวสมมุติที่เกิดขึ้นในจิตใจของผู้เขียน โดยมักจะมีตัวละครหลักที่พูดถึงในเรื่อง และเนื้อเรื่องมักจะถูกแบ่งออกเป็นตอนๆ โดยใช้ภาษาเพื่อเล่าเรื่องในลักษณะของการพูดคุย การบรรยาย หรืออาจจะเป็นการบรรยายจากมุมมองของตัวละครก็ได้เช่นกัน ตัวอย่างเช่น แฟนตาซี ดราม่า สยองขวัญ วิทยาศาสตร์ประสาร ปริศนา การ์ตูน และอื่นๆ โดยส่วนใหญ่จะเป็นเรื่องที่มีความสนุกสนาน และการสื่อความหมายในรูปแบบต่างๆ",
    icon: IconCookie,
  },
];
const test = [
  {
    id: "111111111",
    title: "Testttttt",
  },
  {
    id: "2222222",
    title: "Testttttt",
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function ServicesComponent() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  const showTest = test.map((testlist) => (
    <ul key={testlist.id}>
      <li>รหัส : {testlist.id}</li>
      <li>ชื่อ: {testlist.title}</li>
    </ul>
  ));
  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          หมวดหมู่หนังสือ
        </Badge>
      </Group>
      {test.map((testlist) => (
        <ul key={testlist.id}>
          <li>รหัส : {testlist.id}</li>
          <li>ชื่อ: {testlist.title}</li>
        </ul>
      ))}
      {/* <Title order={2} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text> */}

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
