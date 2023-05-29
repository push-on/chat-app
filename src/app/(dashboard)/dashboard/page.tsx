import Button from '@/components/ui/Button'
import { FC } from 'react'

import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

// interface pageProps { }
// const page: FC<pageProps> = ({ }) => {

const page = async () => {
	const session = await getServerSession(authOptions)
	return (
		<pre>{JSON.stringify(session)}</pre>
	)
}

export default page


