'use client';
import { Button } from '@rusalka/ui';

export default function Test() {
  return (
    <div className="min-h-screen bg-brand-bg p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-brand-fg">Rusalka Design System Demo</h1>
          <p className="text-brand-subtext1">
            Showcasing the @rusalka/ui Button component with the original Rusalka terminal theme
          </p>
        </div>

        <div className="bg-brand-gray1 p-6 rounded-brand-lg shadow-terminal-md space-y-6 border border-brand-gray4">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">Button Variants</h2>
            <p className="text-brand-subtext1">
              The UI library automatically detects and uses the original Rusalka color palette
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary" onClick={() => console.log('Primary clicked')}>
                Primary (Cyan)
              </Button>
              <Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
                Secondary (Gray)
              </Button>
              <Button variant="outline" onClick={() => console.log('Outline clicked')}>
                Outline
              </Button>
              <Button variant="ghost" onClick={() => console.log('Ghost clicked')}>
                Ghost
              </Button>
              <Button variant="destructive" onClick={() => console.log('Destructive clicked')}>
                Destructive (Red)
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">Button Sizes</h2>
            <div className="flex gap-4 items-center flex-wrap">
              <Button size="sm" variant="primary" onClick={() => console.log('Small clicked')}>
                Small
              </Button>
              <Button size="md" variant="primary" onClick={() => console.log('Medium clicked')}>
                Medium
              </Button>
              <Button size="lg" variant="primary" onClick={() => console.log('Large clicked')}>
                Large
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">Disabled States</h2>
            <p className="text-brand-subtext1">
              Enhanced disabled styling with proper visual feedback
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Button variant="primary" disabled>
                Primary
              </Button>
              <Button variant="secondary" disabled>
                Secondary
              </Button>
              <Button variant="outline" disabled>
                Outline
              </Button>
              <Button variant="ghost" disabled>
                Ghost
              </Button>
              <Button variant="destructive" disabled>
                Destructive
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">Rusalka Terminal Theme</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-brand-fg">Color Palette</h3>
                <div className="flex gap-2 flex-wrap">
                  <div className="w-8 h-8 bg-brand-cyan rounded-brand border border-brand-gray4" title="Cyan"></div>
                  <div className="w-8 h-8 bg-brand-red rounded-brand border border-brand-gray4" title="Red"></div>
                  <div className="w-8 h-8 bg-brand-green rounded-brand border border-brand-gray4" title="Green"></div>
                  <div className="w-8 h-8 bg-brand-yellow rounded-brand border border-brand-gray4" title="Yellow"></div>
                  <div className="w-8 h-8 bg-brand-purple rounded-brand border border-brand-gray4" title="Purple"></div>
                  <div className="w-8 h-8 bg-brand-magenta rounded-brand border border-brand-gray4" title="Magenta"></div>
                  <div className="w-8 h-8 bg-brand-orange rounded-brand border border-brand-gray4" title="Orange"></div>
                  <div className="w-8 h-8 bg-brand-blue rounded-brand border border-brand-gray4" title="Blue"></div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-brand-fg">Typography</h3>
                <p className="text-brand-subtext1">Fira Code monospace font for terminal aesthetic</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-brand-subtext2">
          <p>Original Rusalka terminal theme with UI package compatible variable names</p>
        </div>
      </div>
    </div>
  );
}
