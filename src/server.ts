import app from "./app"


const port = 3000

async function main() {
  app.listen(port, () => {
    console.log(`server is running on ${port}`)
  })
}
main().catch((err) => {
  console.error('Error starting the server:', err)
  process.exit(1)
})


