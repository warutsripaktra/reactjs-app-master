import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck, IconPrinter, IconFile } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function HomeComponent() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <IconPrinter size={30} /> <Text variant="gradient" >LIBERRY ROOM</Text>
            </Title>

            <Text color="dimmed" mt="md">
              <IconFile /> ห้องสมุดเสริมสร้างการเรียนรู้ มีหนังสือให้เลือกอ่านมากกว่า100เรื่อง เพื่อเสริมสร้างการพัฒนาการเรียนรู้
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>เพิ่มประสบการ์ในการอ่านหนังสือ</b> – เพื่อเสริมสร้างการพัฒนาการเรียนรู้
              </List.Item>
              <List.Item>
                <b>มีหนังสือมากมายให้เลือกสรรค์</b> –  เปิดประสบการณ์การอ่านหนังสือ
              </List.Item>
              <List.Item>
                <b></b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                สมัครสมาชิก
              </Button>
              
            </Group>
          </div>
          <Image
            src={
              "https://i.pinimg.com/564x/14/b6/70/14b670f183eb1a0ea98d5379f36edd86.jpg"
            }
            className={classes.image}
          />
        </div>
      </Container>
    </div>
  );
}
