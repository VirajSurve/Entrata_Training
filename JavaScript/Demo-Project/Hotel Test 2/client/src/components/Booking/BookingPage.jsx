import { useParams } from "react-router-dom";
import FourthPage from "./FourthPage";

export default function BookingsPage() {
  const { id } = useParams();
  return (
    <div>
      {console.log(id)}
      <FourthPage />
    </div>
  );
}
