export const  fetchStoredData=async ()=>{
    const res = await fetch('https://localhost:44343/intelig/table')
    const data= await res.json();
    return data;
}
export const  postUrlData=async (body:any)=>{

    const res = await fetch('https://localhost:44343/intelig/table',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    const data= await res.json();
    return data;
}

export {};
