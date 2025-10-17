'use client';

export default function DisabledTest() {
  return (
    <div className="min-h-screen bg-brand-bg p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-brand-fg">
            Disabled Styling Test
          </h1>
          <p className="text-brand-subtext1">
            Testing if disabled classes work at all
          </p>
        </div>

        <div className="bg-brand-gray1 p-6 rounded-brand-lg space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">
              Basic Disabled Test
            </h2>
            <div className="flex gap-4 items-center">
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Basic Disabled (should be gray and faded)
              </button>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Basic Enabled (should be blue)
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">
              Brand Color Disabled Test
            </h2>
            <div className="flex gap-4 items-center">
              <button 
                className="px-4 py-2 bg-brand-primary text-white rounded disabled:bg-brand-gray3 disabled:text-brand-subtext3 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled
              >
                Brand Disabled
              </button>
              <button 
                className="px-4 py-2 bg-brand-primary text-white rounded"
              >
                Brand Enabled
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">
              Opacity Test
            </h2>
            <div className="flex gap-4 items-center">
              <div className="px-4 py-2 bg-brand-primary text-white rounded opacity-60">
                Manual opacity-60
              </div>
              <div className="px-4 py-2 bg-brand-primary text-white rounded opacity-100">
                Manual opacity-100
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">
              Cursor Test
            </h2>
            <div className="flex gap-4 items-center">
              <div className="px-4 py-2 bg-brand-primary text-white rounded cursor-not-allowed">
                cursor-not-allowed
              </div>
              <div className="px-4 py-2 bg-brand-primary text-white rounded cursor-pointer">
                cursor-pointer
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">
              Background Color Test
            </h2>
            <div className="flex gap-4 items-center">
              <div className="px-4 py-2 bg-brand-gray3 text-brand-subtext3 rounded">
                bg-brand-gray3 text-brand-subtext3
              </div>
              <div className="px-4 py-2 bg-brand-primary text-white rounded">
                bg-brand-primary text-white
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
