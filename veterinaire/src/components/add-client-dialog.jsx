import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddClientDialog({ onAddClient }) {
  const [open, setOpen] = useState(false)
  const [newClient, setNewClient] = useState({
    name: "",
    city: "",
    country: "",
    lastConsultation: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddClient(newClient)
    setNewClient({
      name: "",
      city: "",
      country: "",
      lastConsultation: "",
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-teal-700 hover:bg-teal-600 text-white hover:text-white">Ajouter un nouveau client</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter un nouveau client</DialogTitle>
          <DialogDescription>
            Remplissez les informations du nouveau client ici. Cliquez sur envoyer quand vous avez terminé.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nom
              </Label>
              <Input
                id="name"
                value={newClient.name}
                onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="city" className="text-right">
                Ville
              </Label>
              <Input
                id="city"
                value={newClient.city}
                onChange={(e) => setNewClient({ ...newClient, city: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="country" className="text-right">
                Pays
              </Label>
              <Input
                id="country"
                value={newClient.country}
                onChange={(e) => setNewClient({ ...newClient, country: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="lastConsultation" className="text-right">
                Dernière consultation
              </Label>
              <Input
                id="lastConsultation"
                type="date"
                value={newClient.lastConsultation}
                onChange={(e) => setNewClient({ ...newClient, lastConsultation: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-teal-700 hover:bg-teal-600">Envoyer</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}