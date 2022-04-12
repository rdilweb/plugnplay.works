import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Plug'n'Play... works?</title>
                <meta
                    name="description"
                    content="Yarn Plug'n'Play compatibility tracker."
                />
            </Head>

            <div className={styles["github-ribbon"]}>
                <a
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/rdilweb/plugnplay.works"
                >
                    Fork/Star on GitHub
                </a>
            </div>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Plug'n'Play neglect is a problem.
                </h1>

                <p className={styles.description}>
                    Some major projects and developer tools, namely TypeScript
                    and VSCode, don't support Plug'n'Play without help.
                </p>

                <div className={styles.grid}>
                    <a
                        href="https://github.com/microsoft/TypeScript/pull/35206"
                        className={styles.card}
                    >
                        <h2>TypeScript &rarr;</h2>
                        <p>
                            Please upvote the PR let the maintainers know that
                            we care.
                        </p>
                    </a>

                    <a
                        href="https://github.com/microsoft/vscode/issues/75559"
                        className={styles.card}
                    >
                        <h2>VSCode &rarr;</h2>
                        <p>
                            Tell VSCode to support zip-based filesystems
                            natively, instead of through a plugin.
                        </p>
                    </a>
                </div>
            </main>
        </div>
    )
}
