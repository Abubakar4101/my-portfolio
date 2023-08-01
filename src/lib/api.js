export const sendMail = async (data) => fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
}).then((res) => {
    if (!res.ok) throw new Error("Failed to send Message")
    return res.json()
})