import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export default function Auth() {
  return (
    <Tabs defaultValue="sign-in" className="w-1/4" >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="sign-in"><span>Iniciar sesion</span></TabsTrigger>
        <TabsTrigger value="sign-up"><span>Registrarse</span></TabsTrigger>
      </TabsList>
    </Tabs>    
  )
}