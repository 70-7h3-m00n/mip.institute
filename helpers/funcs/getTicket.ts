import client from '@/lib/apolloClient'
import UPDATE_EVENT from '@/lib/graphQL/UPDATE_EVENT'
import checkOrUpdateTokens from 'pages/api/checkOrUpdateTokens'
import { v4 as uuidv4 } from 'uuid'

const getTicket = async values => {
  try {
    values.id = uuidv4()
    const checkToken =  await checkOrUpdateTokens()
    const access_token = checkToken?.access_token
    values.access = access_token

    const { data } = await client.mutate({
      mutation: UPDATE_EVENT,
      variables: {
        input: {
          where: { id: values.seminar_id },
          data: {
            tickets_quantity: values.seminar_tickets_quantity - values.tickets
          }
        }
      },
    })

      return data.updateEvent.event.tickets_quantity
    
  } catch (err) {
    console.log(err)
  }
}


export default getTicket