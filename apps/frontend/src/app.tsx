import { Link, Meta, MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.scss";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Sejajan</Title>
          <Meta
            name="description"
            content="Patungan jajan bareng jadi lebih hemat!"
          />

          <Link rel="preconnect" href="https://fonts.googleapis.com" />
          <Link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin=""
          />
          <Link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap"
          />

          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
