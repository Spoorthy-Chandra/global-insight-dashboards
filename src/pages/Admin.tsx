import { Navbar } from "@/components/Navbar";
import { Users, LogIn, Eye, MessageSquare } from "lucide-react";
import { getUsers } from "@/lib/auth";

const Admin = () => {
  const users = getUsers();
  const loginCount = parseInt(localStorage.getItem("login_count") || "0");
  const viewCount = parseInt(localStorage.getItem("dashboard_views") || "0");

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Admin Dashboard
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              System statistics and user management
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="glass rounded-2xl p-6 card-shadow animate-fade-in-up">
              <Users className="text-primary mb-4" size={32} />
              <div className="text-3xl font-bold mb-2">{users.length}</div>
              <div className="text-sm text-muted-foreground">Total Users</div>
            </div>

            <div className="glass rounded-2xl p-6 card-shadow animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <LogIn className="text-secondary mb-4" size={32} />
              <div className="text-3xl font-bold mb-2">{loginCount}</div>
              <div className="text-sm text-muted-foreground">Login Count</div>
            </div>

            <div className="glass rounded-2xl p-6 card-shadow animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Eye className="text-accent mb-4" size={32} />
              <div className="text-3xl font-bold mb-2">{viewCount}</div>
              <div className="text-sm text-muted-foreground">Dashboard Views</div>
            </div>

            <div className="glass rounded-2xl p-6 card-shadow animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <MessageSquare className="text-primary mb-4" size={32} />
              <div className="text-3xl font-bold mb-2">0</div>
              <div className="text-sm text-muted-foreground">Feedback Messages</div>
            </div>
          </div>

          {/* Users Table */}
          <div className="glass rounded-2xl p-8 card-shadow animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <h2 className="text-2xl font-bold mb-6">Registered Users</h2>
            {users.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index} className="border-b border-border/50 hover:bg-primary/5">
                        <td className="py-3 px-4">{user.name || "N/A"}</td>
                        <td className="py-3 px-4">{user.email}</td>
                        <td className="py-3 px-4">
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
                            Active
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No users registered yet
              </div>
            )}
          </div>

          {/* Activity Log */}
          <div className="glass rounded-2xl p-8 card-shadow mt-8 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="font-semibold">New user registration</p>
                  <p className="text-sm text-muted-foreground">A new user signed up for the platform</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/5">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                <div>
                  <p className="font-semibold">Dashboard viewed</p>
                  <p className="text-sm text-muted-foreground">Dashboard 1 was accessed</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/5">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <p className="font-semibold">Search performed</p>
                  <p className="text-sm text-muted-foreground">User searched for "Gini Index"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
