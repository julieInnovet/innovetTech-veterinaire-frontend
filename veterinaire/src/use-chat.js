import { useState } from 'react'
import { dummyMessages } from './data'

export function useMedicalChat() {
  const [messages, setMessages] = useState(dummyMessages)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsLoading(true)
    
    // Add user message
    const userMessage = { id: String(messages.length + 1), role: 'user', content: input }
    setMessages(prevMessages => [...prevMessages, userMessage])
    setInput('')

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = { 
        id: String(messages.length + 2), 
        role: 'assistant', 
        content: `Voici une réponse simulée à votre question: "${input}". Dans un système réel, cela serait généré par un modèle d'IA.`
      }
      setMessages(prevMessages => [...prevMessages, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading
  }
}