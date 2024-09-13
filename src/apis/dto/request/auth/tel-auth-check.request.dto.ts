//interface: 전화번회 인증확인 request body dto //
export default interface TelAuthCheckRequestDto{
    telNumber: string;
    authNumber: string;
}