import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' element={<h1>Olá</h1>} />
            </Switch>
        </BrowserRouter>
    )
}