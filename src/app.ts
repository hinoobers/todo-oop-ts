import express, { Request, Response, NextFunction } from 'express'
import todoRoutes from './routes/todos'

const app = express()

app.use('/todos', todoRoutes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: error.message })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})