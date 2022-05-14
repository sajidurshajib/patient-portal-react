let url =
    'https://api.mobireach.com.bd/SendTextMessage?Username=healthx&Password=Dh@ka@202!&From=8801847121242&To=8801580354972&Message=testmessage'

const click = async (e) => {
    e.preventDefault()

    const fun = await fetch(url, {
        headers: {
            Accept: 'appllication/json',
            'Content-Type': 'application/json',
        },
        dataType: 'json',
        method: 'GET',
    })

    await fun.json()
}

const TestPage = () => {
    return (
        <div>
            <h2>Test Page</h2>
            <button onClick={(e) => click(e)}>Click</button>
        </div>
    )
}

export default TestPage
