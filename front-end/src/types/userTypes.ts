export interface UserData {
    userId: string;
    name: string;
    email: string;
    role: "condidature" | "recruteur";
    appliedOffers: string;
}