
export const handler = (req: Request,): Response => {

    const url = new URL("/redirect", req.url)
    console.log(url.href)
    return  Response.redirect(url.href, 307);
};