import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Dialog, DialogFooter } from "./Dialog";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const meta: Meta<typeof Dialog> = {
  title: "Components/Overlay/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Modal dialog component for displaying content that requires user attention or interaction.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "full"],
      description: "The size of the dialog",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Whether to show the close button",
    },
    title: {
      control: { type: "text" },
      description: "Dialog title",
    },
    description: {
      control: { type: "text" },
      description: "Dialog description",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  render: () => (
    <Dialog
      trigger={<Button>Open Dialog</Button>}
      title="Dialog Title"
      description="This is a description of what this dialog is for."
    >
      <div className="space-y-4">
        <p className="text-brand-subtext1">
          This is the main content of the dialog. You can put any content here.
        </p>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </div>
    </Dialog>
  ),
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Dialog
        trigger={<Button size="sm">Small</Button>}
        title="Small Dialog"
        size="sm"
      >
        <p className="text-brand-subtext1">This is a small dialog.</p>
        <DialogFooter>
          <Button size="sm">OK</Button>
        </DialogFooter>
      </Dialog>
      
      <Dialog
        trigger={<Button>Medium</Button>}
        title="Medium Dialog"
        size="md"
      >
        <p className="text-brand-subtext1">This is a medium dialog.</p>
        <DialogFooter>
          <Button>OK</Button>
        </DialogFooter>
      </Dialog>
      
      <Dialog
        trigger={<Button size="lg">Large</Button>}
        title="Large Dialog"
        size="lg"
      >
        <p className="text-brand-subtext1">This is a large dialog with more space for content.</p>
        <DialogFooter>
          <Button size="lg">OK</Button>
        </DialogFooter>
      </Dialog>
    </div>
  ),
};

// Form dialog
export const FormDialog: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      name: "",
      email: "",
    });

    return (
      <Dialog
        trigger={<Button>Edit Profile</Button>}
        title="Edit Profile"
        description="Make changes to your profile here. Click save when you're done."
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-fg">Name</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-fg">Email</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
            />
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </DialogFooter>
        </div>
      </Dialog>
    );
  },
};

// Confirmation dialog
export const ConfirmationDialog: Story = {
  render: () => (
    <Dialog
      trigger={<Button variant="destructive">Delete Account</Button>}
      title="Are you absolutely sure?"
      description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
    >
      <DialogFooter>
        <Button variant="outline">Cancel</Button>
        <Button variant="destructive">Yes, delete account</Button>
      </DialogFooter>
    </Dialog>
  ),
};

// Controlled dialog
export const ControlledDialog: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="space-y-4">
        <div className="flex space-x-2">
          <Button onClick={() => setOpen(true)}>Open Dialog</Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close Dialog
          </Button>
        </div>
        
        <Dialog
          open={open}
          onOpenChange={setOpen}
          title="Controlled Dialog"
          description="This dialog's open state is controlled externally."
        >
          <div className="space-y-4">
            <p className="text-brand-subtext1">
              The open state of this dialog is controlled by external state.
            </p>
            <DialogFooter>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </DialogFooter>
          </div>
        </Dialog>
        
        <p className="text-sm text-brand-subtext1">
          Dialog is currently: {open ? "Open" : "Closed"}
        </p>
      </div>
    );
  },
};

// Without close button
export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog
      trigger={<Button>Open Dialog</Button>}
      title="Important Notice"
      description="This dialog requires you to make a choice."
      showCloseButton={false}
    >
      <div className="space-y-4">
        <p className="text-brand-subtext1">
          This dialog doesn't have a close button. You must choose an action.
        </p>
        <DialogFooter>
          <Button variant="outline">Decline</Button>
          <Button>Accept</Button>
        </DialogFooter>
      </div>
    </Dialog>
  ),
};

// Complex content
export const ComplexContent: Story = {
  render: () => (
    <Dialog
      trigger={<Button>View Details</Button>}
      title="Project Details"
      size="lg"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-brand-fg mb-2">Project Info</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-brand-subtext1">Status:</span>
                <span className="text-brand-success">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-subtext1">Created:</span>
                <span className="text-brand-fg">Jan 15, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-subtext1">Team:</span>
                <span className="text-brand-fg">5 members</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-brand-fg mb-2">Progress</h4>
            <div className="space-y-2">
              <div className="w-full bg-brand-surface-secondary rounded-full h-2">
                <div className="bg-brand-primary h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
              <p className="text-sm text-brand-subtext1">75% complete</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-brand-fg mb-2">Description</h4>
          <p className="text-brand-subtext1">
            This is a comprehensive project that involves multiple phases and team collaboration.
            The project aims to deliver a high-quality solution that meets all requirements.
          </p>
        </div>
        
        <DialogFooter>
          <Button variant="outline">Edit</Button>
          <Button>View Full Report</Button>
        </DialogFooter>
      </div>
    </Dialog>
  ),
};
