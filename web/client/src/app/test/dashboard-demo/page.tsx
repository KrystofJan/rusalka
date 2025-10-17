'use client';

import React, { useState } from 'react';
import {
  Button,
  Card,
  Input,
  Select,
  Switch,
  Alert,
  Badge,
  Progress,
  Dialog,
  Tooltip,
  DropdownMenu,
  Separator,
  Container,
  DialogFooter,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  TooltipProvider,
} from '@rusalka/ui';

export default function DashboardDemo() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    autoSave: false,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState('project-1');
  const [showWelcome, setShowWelcome] = useState(true);

  const projects = [
    { value: 'project-1', label: 'Website Redesign' },
    { value: 'project-2', label: 'Mobile App' },
    { value: 'project-3', label: 'API Integration' },
  ];

  const tasks = [
    { id: 1, title: 'Design Homepage', status: 'completed', priority: 'high' },
    { id: 2, title: 'Implement Authentication', status: 'in-progress', priority: 'high' },
    { id: 3, title: 'Write Documentation', status: 'pending', priority: 'medium' },
    { id: 4, title: 'Setup CI/CD', status: 'pending', priority: 'low' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="success">Completed</Badge>;
      case 'in-progress':
        return <Badge variant="warning">In Progress</Badge>;
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive" size="sm">High</Badge>;
      case 'medium':
        return <Badge variant="warning" size="sm">Medium</Badge>;
      case 'low':
        return <Badge variant="outline" size="sm">Low</Badge>;
      default:
        return <Badge variant="outline" size="sm">-</Badge>;
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-brand-bg text-brand-fg">
        <Container size="2xl" className="py-6">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-brand-fg">Project Dashboard</h1>
                <p className="text-brand-subtext1">Manage your projects and tasks</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Tooltip content="Search projects and tasks">
                  <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64"
                  />
                </Tooltip>
                
                <DropdownMenu
                  trigger={
                    <Button variant="outline">
                      Settings ⚙️
                    </Button>
                  }
                >
                  <DropdownMenuLabel>Preferences</DropdownMenuLabel>
                  <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                  <DropdownMenuItem>Team Management</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Export Data</DropdownMenuItem>
                  <DropdownMenuItem>Sign Out</DropdownMenuItem>
                </DropdownMenu>

                <Dialog
                  trigger={<Button>New Project</Button>}
                  title="Create New Project"
                  description="Set up a new project to start tracking tasks and progress."
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-fg">Project Name</label>
                      <Input placeholder="Enter project name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-fg">Template</label>
                      <Select
                        options={[
                          { value: 'web', label: 'Web Development' },
                          { value: 'mobile', label: 'Mobile App' },
                          { value: 'design', label: 'Design Project' },
                        ]}
                        placeholder="Choose a template"
                      />
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Create Project</Button>
                    </DialogFooter>
                  </div>
                </Dialog>
              </div>
            </div>

            {/* Welcome Alert */}
            {showWelcome && (
              <Alert
                variant="info"
                title="Welcome to your dashboard!"
                dismissible
                onDismiss={() => setShowWelcome(false)}
              >
                Here you can manage all your projects, track progress, and collaborate with your team.
              </Alert>
            )}

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card size="sm">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-brand-primary">12</div>
                  <div className="text-sm text-brand-subtext1">Active Projects</div>
                </div>
              </Card>
              <Card size="sm">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-brand-success">34</div>
                  <div className="text-sm text-brand-subtext1">Completed Tasks</div>
                </div>
              </Card>
              <Card size="sm">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-brand-warning">8</div>
                  <div className="text-sm text-brand-subtext1">In Progress</div>
                </div>
              </Card>
              <Card size="sm">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-brand-fg">5</div>
                  <div className="text-sm text-brand-subtext1">Team Members</div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Project Selector */}
                <Card>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-brand-fg">Current Project</h2>
                      <Badge variant="success">Active</Badge>
                    </div>
                    
                    <Select
                      options={projects}
                      value={selectedProject}
                      onValueChange={setSelectedProject}
                    />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-brand-subtext1">Progress</span>
                        <span className="text-brand-fg">75%</span>
                      </div>
                      <Progress value={75} variant="success" />
                    </div>
                  </div>
                </Card>

                {/* Tasks List */}
                <Card>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-brand-fg">Tasks</h2>
                      <Button size="sm">Add Task</Button>
                    </div>
                    
                    <div className="space-y-3">
                      {tasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center justify-between p-3 border border-brand-border rounded-brand-md hover:bg-brand-surface-secondary transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 rounded-full bg-brand-primary" />
                            <span className="font-medium text-brand-fg">{task.title}</span>
                            {getPriorityBadge(task.priority)}
                          </div>
                          <div className="flex items-center space-x-2">
                            {getStatusBadge(task.status)}
                            <DropdownMenu
                              trigger={
                                <Button variant="ghost" size="sm">
                                  ⋯
                                </Button>
                              }
                            >
                              <DropdownMenuItem>Edit Task</DropdownMenuItem>
                              <DropdownMenuItem>Assign to</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenu>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Settings */}
                <Card>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-brand-fg">Settings</h3>
                    
                    <div className="space-y-3">
                      <Switch
                        id="notifications"
                        label="Enable notifications"
                        checked={settings.notifications}
                        onCheckedChange={(checked) =>
                          setSettings({ ...settings, notifications: checked })
                        }
                      />
                      
                      <Switch
                        id="darkMode"
                        label="Dark mode"
                        checked={settings.darkMode}
                        onCheckedChange={(checked) =>
                          setSettings({ ...settings, darkMode: checked })
                        }
                      />
                      
                      <Switch
                        id="autoSave"
                        label="Auto-save changes"
                        checked={settings.autoSave}
                        onCheckedChange={(checked) =>
                          setSettings({ ...settings, autoSave: checked })
                        }
                      />
                    </div>
                  </div>
                </Card>

                {/* Team Activity */}
                <Card>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-brand-fg">Recent Activity</h3>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-success" />
                        <span className="text-brand-subtext1">
                          <strong>Alice</strong> completed "Design Homepage"
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-warning" />
                        <span className="text-brand-subtext1">
                          <strong>Bob</strong> started "API Integration"
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-primary" />
                        <span className="text-brand-subtext1">
                          <strong>Carol</strong> added new comment
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-brand-fg">Quick Actions</h3>
                    
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        📊 View Reports
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        👥 Invite Team Member
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        📁 Export Project
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        ⚙️ Project Settings
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </TooltipProvider>
  );
}
