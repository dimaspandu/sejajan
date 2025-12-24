function getOrCreateUser(user) {
  const users = getAllRows("users");
  const existing = users.find(u => u.id === user.id);

  if (existing) return existing;

  const newUser = {
    id: user.id,
    username: user.username || "anonymous",
    avatar_url: user.avatar_url || "",
    email: user.email || "",
    created_at: nowISO(),
    last_active_at: nowISO()
  };

  appendRow("users", newUser);
  return newUser;
}
