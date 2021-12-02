import Presentation from "../components/Presentation/Presentation";
import { useUser } from "../hooks/useUser";
import { FooterEnd } from "../components/Footer/FooterEnd";

export default function PresentationPage() {
  const { userLogget } = useUser();
  return (
    userLogget === null && (
      <>
        <Presentation />
        <FooterEnd />
      </>
    )
  );
}