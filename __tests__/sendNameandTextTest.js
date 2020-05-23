import { postData } from '../src/client/js/sendNameAndText'

describe('testing sendNameAndText', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('Sending name and text and aylien returns data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

    //assert on the response
    postData('/sentiment', {name:'John', text:'some text'}).then(res => {
      expect(res.data).toEqual('12345')
    })

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1)
  })
})
