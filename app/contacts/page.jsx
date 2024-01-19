import React from 'react'

const Contacts = () => {
  return (
    <div className='mx-24 mb-6'>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">Hello, How can i find you guys?</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info">Hi, Chembers is on all Major social media platforms</div>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="clogo.png" />
          </div>
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">Do you have a Phone Number?</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info">Yes. Tel : 0726 798 118</div>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="clogo.png" />
          </div>
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">What about an Email Address?</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info">Email: chembers@gmail.com</div>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="clogo.png" />
          </div>
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">Cool, i'd like to follow your social media accounts please.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info">IG: ChembersBeds, FB: Chembers Beds, X: Chembers Beds</div>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="clogo.png" />
          </div>
        </div>
      </div>

      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">Thank you, you guys are awesome</div>
      </div>

      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info">You are very welcome.</div>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="clogo.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts