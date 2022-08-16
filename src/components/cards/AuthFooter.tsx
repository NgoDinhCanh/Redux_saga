import {
  useMediaQuery,
  Container,
  Link,
  Typography,
  Stack,
  Theme,
} from "@mui/material";

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? "column" : "row"}
        justifyContent={matchDownSM ? "center" : "space-between"}
        spacing={2}
        textAlign={matchDownSM ? "center" : "inherit"}
      >
        <Typography
          variant="subtitle2"
          color="secondary"
          component="span"
          sx={{
            color: "#333",
          }}
        >
          &copy; TLC Modular Application By&nbsp;
          <Typography
            component={Link}
            variant="subtitle2"
            href="https://www.linkedin.com/in/ngo-dinh-canh-588839220/"
            target="_blank"
            underline="hover"
          >
            NDC
          </Typography>
        </Typography>

        <Stack
          direction={matchDownSM ? "column" : "row"}
          spacing={matchDownSM ? 1 : 3}
          textAlign={matchDownSM ? "center" : "inherit"}
        >
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://codedthemes.com"
            target="_blank"
            underline="hover"
            sx={{
              color: "#333",
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://codedthemes.support-hub.io/"
            target="_blank"
            underline="hover"
            sx={{
              color: "#333",
            }}
          >
            Support
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AuthFooter;
