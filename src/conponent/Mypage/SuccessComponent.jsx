import { useSearchParams } from "react-router-dom";
import MemberInfoAxiosApi from "../../axios/MemberInfoAxios";
import { useEffect } from "react";

export function SuccessPage() {
  const [searchParams] = useSearchParams();

  // 서버로 승인 요청
  const paymentSuccess = async () => {
    try {
      const response = await MemberInfoAxiosApi.increasePoints(
        searchParams.email,
        searchParams.price
      );
      if (response.status === 200 && response.data === true) {
        console.log("API response: ", response);
      } else {
        throw new Error("충전에 실패하였습니다");
      }
    } catch (error) {
      console.error(error);
      alert("충전에 실패하였습니다.");
    }
  };
  useEffect(() => {
    const email = searchParams.get("email");
    const price = searchParams.get("price");

    console.log("email: ", email);
    console.log("price: ", price);

    paymentSuccess(email, price);
  }, []);
  return (
    <div>
      <h1>결제 성공</h1>
      <div>{`주문 아이디: ${searchParams.get("orderId")}`}</div>
      <div>{`결제 금액: ${Number(
        searchParams.get("amount")
      ).toLocaleString()}원`}</div>
    </div>
  );
}
