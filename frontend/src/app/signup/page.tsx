import { Grid, Stack } from "@mui/material";
import { SignUp } from "@/components/signup/Signup";
function HomeSignUp() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
      }}
    >
      <SignUp />
    </Stack>
  );
}
export default HomeSignUp;
