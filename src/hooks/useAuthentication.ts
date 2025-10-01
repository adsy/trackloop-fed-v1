export type UseAuthentication = () => {
    signIn:(username:string,password:string)=>void;
}


export const useAuthentication: UseAuthentication = () => {
    const signIn = (username:string,password:string) => {
        console.log(username,password);
    }

    return {signIn};
};