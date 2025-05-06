
import "./globals.css";

export const metadata = {
  title: "San Diego Top Spots",
  description: "A list of the top 30 palces to see in San Diego",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
         href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
         rel="stylesheet"
         integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
         crossorigin="anonymous"
        />
      </head>
      <body>
        <div id = 'root'>{children}</div>
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" 
          crossorigin="anonymous"
        />
      </body>
    </html>
  );
}
