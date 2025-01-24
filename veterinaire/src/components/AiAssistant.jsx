import { useRef, useEffect, useState } from "react"
import { Send, FileText, ChevronRight, ChevronLeft, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMedicalChat } from "../use-chat"
import { dummySuggestedQuestions, dummyResources } from "../data"

function ChatMessage({ message }) {
  const isUser = message.role === "user"

  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      <Card
        className={`p-2 sm:p-4 max-w-[90%] sm:max-w-[80%] ${isUser ? "bg-primary text-primary-foreground" : "bg-muted"}`}
      >
        <div className="flex gap-2 sm:gap-3 items-start">
          <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
            <span className="text-xs">{isUser ? "You" : "AI"}</span>
          </Avatar>
          <div className="leading-relaxed">
            <p className="text-xs sm:text-sm">{message.content}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default function MedicalChat() {
  const chatContainerRef = useRef(null)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useMedicalChat()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(e)
  }

  const handleSuggestedQuestion = (question) => {
    const fakeEvent = {
      preventDefault: () => {},
      target: {
        elements: {
          message: { value: question },
        },
      },
    }
    handleSubmit(fakeEvent)
  }

  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-[#307e76] text-3xl font-bold text-left mb-3">AI Assistant</h1>

      <div className="flex-1 flex gap-4">
        {/* Main Chat Section */}
        <div className="flex-1  flex flex-col lg:h-[calc(100vh-9rem)] border rounded-lg overflow-hidden sm:h-[calc(100vh-30rem)]">
          {/* Navbar */}
          <nav className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
              <div className="flex items-center justify-between h-20">
                <div className="flex items-center">
                  <h1 className="text-sm font-semibold md:max-w-[10vw] sm:max-w-[70w] mt-5">
                    Conversation avec l'Assistant IA
                  </h1>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-baseline space-x-4">
                    {["Rechercher un patient", "Résumé", "Rapport complet", "Catégoriser", "Télécharger"].map(
                      (text) => (
                        <Button key={text} variant="ghost" className="border border-gray-300 text-sm" size="sm">
                          {text}
                        </Button>
                      ),
                    )}
                  </div>
                </div>
                <div className="md:hidden">
                  <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon">
                        {sidebarOpen ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                      <SidebarContent />
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </nav>
          {/* Chat Messages Area */}
          <ScrollArea className="flex-1 p-4" ref={chatContainerRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 border-t">
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2">
              <Button type="button" variant="secondary" className="w-full sm:w-auto">
                Assistant général
              </Button>
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Poser votre question ici ..."
                  value={input}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button type="submit" disabled={isLoading || !input.trim()} className="bg-teal-700 hover:bg-teal-600">
                  <Send className="h-4 w-4" />
                </Button>
                <Button className="bg-teal-700 hover:bg-teal-600">
                  <Mic />
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar (visible on larger screens) */}
        <div className="hidden md:flex md:w-80 flex-col h-[calc(100vh-8rem)] border rounded-lg overflow-hidden md:h-[174.5%]">
          <SidebarContent />
        </div>
      </div>

      <div className="p-6 max-w-4xl border border-gray-200 rounded-lg mt-4 md:max-w-[57vw] sm:max-w-[95vw]">
        <h1 className="text-2xl font-semibold mb-8 text-left">Questions suggérées et Ressources</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Questions */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Questions suggérées</h2>

            {dummySuggestedQuestions.map((question, index) => (
              <Card key={index} className="shadow-md">
                <div className="p-4">
                  <p className="text-sm">{question}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Right Column - Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Ressources suggérées</h2>
            <ul className="space-y-2 list-disc pl-4">
              {dummyResources.map((resource, index) => (
              <li key={index}>{resource.title} ({resource.type})</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarContent() {
  return (
    <>
      <div className="p-4 border-b">
        <h2 className="font-semibold mb-4 text-center">Historique des conversations</h2>
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <Button variant="outline" size="sm" className="flex-1">
            Tous les thèmes
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Tous les patients
          </Button>
        </div>
        <Button className="w-full bg-teal-700 hover:bg-teal-600">Nouvelle conversation</Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">{/* Conversation history items would go here */}</div>
      </ScrollArea>
    </>
  )
}

