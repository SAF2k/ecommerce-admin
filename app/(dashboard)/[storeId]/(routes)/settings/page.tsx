import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

import prismadb from "@/lib/prismadb"

interface SettingPageProps {
    params: {
        storeId: string
    }
}

const SettingPage: React.FC<SettingPageProps> = async ({ params }) => {

    const {userId} = auth()

    if(!userId){
        redirect('/sign-in')
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    })

    if(!store){
        redirect('/')
    }

  return (
    <div>SettingPage</div>
  )
}

export default SettingPage