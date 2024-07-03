import { currentUser } from "@/lib/auth"
import UserSubscriptionList from "@/components/user-subscription/user-subscription-list";


const Page = async () => {
  const user = await currentUser();
  if (!user) {
    return (
      <div className="mx-auto px-8 mt-24">
        You don&apos;t have access to this Page.
      </div>
    )
  }

  return (
    <div className="mt-32">
      <div className="flex flex-col mx-auto px-24">
        <UserSubscriptionList  token={user.accessToken}/>
      </div>
    </div>
  )
}

export default Page