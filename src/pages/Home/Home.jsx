
import css from "./Home.module.css"

export default function Home() {
    return (
        <div style={css.container}>
            <h1 style={css.title}>
                Welcome to your phonebook{' '}
                <span role="img" aria-label="Greeting icon">
                    💁‍♀️
                </span>
            </h1>
        </div>
    );
}
