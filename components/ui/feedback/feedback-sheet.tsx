"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { BugIcon, LightbulbIcon, MessageSquareIcon } from "lucide-react"
import Link from "next/link"
import { LoadingButton } from "@/components/ui/loading-button"

export default function FeedbackSheet({ feedbackUrl, sendBugReport }: {
  feedbackUrl: string,
  sendBugReport: (bug: string, image: File | null) => void,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [bugDescription, setBugDescription] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0])
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true);
    // Here you would typically send the bug report to your backend

    await sendBugReport(bugDescription, image);

    setIsLoading(false);
    setIsModalOpen(false)
    setBugDescription("")
    setImage(null)
  }

  return (
    <div>
      <Sheet>
        <SheetContent side="right" className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Feedback</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:bg-accent transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BugIcon className="mr-2 h-5 w-5" />
                      Fehler berichten
                    </CardTitle>
                    <CardDescription>
                      Hast du ein Problem gefunden? Schreib uns, damit wir es reparieren können.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Hier klicken, um ein Formular zu öffnen, was ein Ticket erstellt.
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Melde einen Fehler</DialogTitle>
                </DialogHeader>
                <form onSubmit={async (e) => await handleSubmit(e)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bugDescription">Fehlerbeschreibung</Label>
                    <Textarea
                      id="bugDescription"
                      placeholder="Beschreibe den Fehler. Füge so viele Informationen zu wie möglich, wie URL, Klickpfade, Änderungen, uvm..."
                      value={bugDescription}
                      onChange={(e) => setBugDescription(e.target.value)}
                      required
                    />
                  </div>
                  {/* <div className="space-y-2">
                    <Label htmlFor="imageUpload">Upload Screenshot (optional)</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("imageUpload")?.click()}
                      >
                        <UploadIcon className="mr-2 h-4 w-4" />
                        Choose Image
                      </Button>
                      {image && <span className="text-sm text-muted-foreground">{image.name}</span>}
                    </div>
                  </div> */}
                  <LoadingButton loading={isLoading} type="submit" className="w-full">Anfrage absenden</LoadingButton>
                </form>
              </DialogContent>
            </Dialog>

            <Link href={feedbackUrl} rel="noopener noreferrer" target="_blank" className="block">
              <Card className="cursor-pointer hover:bg-accent transition-colors h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LightbulbIcon className="mr-2 h-5 w-5" />
                    Weitere Funktionen anfordern
                  </CardTitle>
                  <CardDescription>
                    Du hast Ideen, die die Seite noch besser machen? Wir freuen uns über jede Idee von dir!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Hier klicken um auf unsere "Feature Request"-Seite zu kommen, in der du uns Ideen und Verbesserungen zuspielen kannst.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </SheetContent>
        <SheetTrigger asChild>
          <Button
            className="fixed bottom-4 right-4 rounded-full w-16 h-16"
            size="icon"
          >
            <MessageSquareIcon className="h-6 w-6" />
            <span className="sr-only">Open feedback</span>
          </Button>
        </SheetTrigger>
      </Sheet>
    </div>
  )
}