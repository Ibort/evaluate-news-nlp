import { postData } from '../src/client/js/sendNameAndText'

describe('testing sendNameAndText', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('Sending name and text and aylien returns data to me', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

    //assert on the response
    postData('/sentiment', {name:'John', text:'some text'}).then(res => {
      expect(res.data).toEqual('12345')
    })

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1)
    // expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
    // console.log(fetch.mock.calls);
  })
})
