function showSalary(users, age) {
 
  let usersFilter = users.filter((user) => {
    return user.age <= age;
  });
  
  let usersMapped = usersFilter.map((user) => {
    return (`${user.name}, ${user.balance}`);
  });

  let String = usersMapped.join('\n');

  return String

}
