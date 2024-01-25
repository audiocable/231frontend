import React from 'react';

const Home = () => {
  return (
    <div className='flex items-center justify-center'>

      <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm'>
        <ul className="menu w-56 rounded-box">
          <li className="menu-title">Conversations</li>
          <li><a>Conversation 3</a></li>
          <li><a>Conversation 2</a></li>
          <li><a>Conversation 1</a></li>
        </ul>
      </div>

      <div className='bg-white p-8 rounded-lg shadow-lg min-w-half'>

        <div className='text-center'>
          <ul className='steps lg:steps-horizontal mb-10 inline-block'>
            <li className="step step-primary">Identify Issue</li>
            <li className="step step-primary">Chat with OpsAI</li>
            <li className="step">Build Ticket</li>
          </ul>
        </div>

        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-header">
            LabOps Support
            <time className="text-xs opacity-50 ml-1">12:46</time>
          </div>
          <div className="chat-bubble">Welcome to Lab Operations ticketing support. Please include specific details regarding your issue!</div>
        </div>

        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-header">
            User
            <time className="text-xs opacity-50 ml-1">12:46</time>
          </div>
          <div className="chat-bubble">I have an issue with my VM</div>
        </div>

        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-header">
            LabOps Support
            <time className="text-xs opacity-50 ml-1">12:46</time>
          </div>
          <div className="chat-bubble">Can you provide more details about the issue you're experiencing with your VM?
            What error messages or symptoms are you encountering? Which virtualization platform are you using (e.g., VMware, VirtualBox, Hyper-V)?
            Can you share details about the VM configuration (e.g., OS, allocated resources, network settings)?</div>
        </div>

        <div className='mb-4'>
          <div className='flex mt-10 justify-between'>
            <input type='text' className='flex-grow input input-bordered mr-2' placeholder='Enter text here' />
            <button className='btn btn-primary'>Submit</button>
          </div>
        </div>

        <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="drawer-button btn">Dev Console</label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="mockup-code">
            <pre data-prefix="$"><code>Awaiting governor approval...</code></pre> 
            <pre data-prefix=">" className="text-warning"><code>Accessing knowledge base...</code></pre> 
            <pre data-prefix=">" className="text-warning"><code>Accessing DEEP...</code></pre> 
            <pre data-prefix=">" className="text-warning"><code>Accessing Snowflake...</code></pre> 
            <pre data-prefix=">" className="text-success"><code>Reply sent!</code></pre>
            <pre data-prefix="$"><code>Building ticket...</code></pre> 
            <pre data-prefix=">" className="text-warning"><code>Awaiting triage agent...</code></pre> 
            <pre data-prefix=">" className="text-success"><code>Ticket #59304 submitted!</code></pre>
          </div>
        </div>
      </div>

      </div>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm'>
        <div className='mb-4'>
          <p className='card p-4'>
            <h2 className='text-xl font-semibold'>Suggested Documents</h2>
            <h2 className='text-gray-600 mt-2'>Document Name 1</h2>
            <h2 className='text-gray-600 mt-2'>Document Name 2</h2>
            <h2 className='text-gray-600 mt-2'>Document Name 3</h2>
          </p>
        </div>
        <p className='card p-4'>
            <h2 className='text-xl font-semibold'>AI Insights</h2>
            <h2 className='text-gray-600 mt-2'>Helpful hint: This is where the LLM will populate LabOps-informed general advice on your issue.</h2>
          </p>
      </div>

    </div>
  )
}

export default Home;