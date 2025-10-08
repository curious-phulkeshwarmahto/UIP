import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  GraduationCap,
  BookOpen,
  Building,
} from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Login() {
  const { login } = useAuth();
  const [activeTab, setActiveTab] = useState('select-role');

  const handleRoleSelect = (role: 'student' | 'teacher' | 'institution') => {
    login(role);
  };

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="w-full max-w-md">
          <motion.div
            className="text-center mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-lg">UIP</span>
              </div>
            </Link>
            <h1 className="text-3xl font-bold">Welcome to the Unified Interface Platform</h1>
            <p className="mt-3 text-muted-foreground">
              Select your role to access the platform
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <Tabs defaultValue="select-role" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="select-role">Select Role</TabsTrigger>
                <TabsTrigger value="login" disabled={activeTab !== 'login'}>Login</TabsTrigger>
                <TabsTrigger value="register" disabled={activeTab !== 'register'}>Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="select-role">
                <div className="grid gap-6">
                  <motion.div variants={fadeIn} transition={{ duration: 0.3 }}>
                    <Card className="cursor-pointer hover:shadow-md transition-all" onClick={() => handleRoleSelect('student')}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">Student</h3>
                            <p className="text-sm text-muted-foreground">
                              Track your academic journey and achievements
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} transition={{ duration: 0.3, delay: 0.1 }}>
                    <Card className="cursor-pointer hover:shadow-md transition-all" onClick={() => handleRoleSelect('teacher')}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <BookOpen className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">Teacher</h3>
                            <p className="text-sm text-muted-foreground">
                              Monitor student progress and manage your classes
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} transition={{ duration: 0.3, delay: 0.2 }}>
                    <Card className="cursor-pointer hover:shadow-md transition-all" onClick={() => handleRoleSelect('institution')}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <Building className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">Institution Admin</h3>
                            <p className="text-sm text-muted-foreground">
                              Manage your institution's data and analytics
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <div className="text-center text-sm text-muted-foreground mt-4">
                    <p>
                      This is a demo for the Smart India Hackathon 2025. <br />
                      No real authentication is implemented.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                      Enter your credentials below to access the platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center py-8 text-muted-foreground">
                      Login functionality is not implemented in this demo. <br />
                      Please go back and select a role instead.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setActiveTab('select-role')}
                    >
                      Back to Role Selection
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="register">
                <Card>
                  <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                      Register to access the Unified Interface Platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center py-8 text-muted-foreground">
                      Registration functionality is not implemented in this demo. <br />
                      Please go back and select a role instead.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setActiveTab('select-role')}
                    >
                      Back to Role Selection
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}