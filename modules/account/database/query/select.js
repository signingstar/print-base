export const getUserInfo = `
  SELECT id, first_name, last_name, phone_number, email, date_of_birth, gender
  FROM user_account.users
  WHERE id=$1;
  `

export const getUserAddress = `SELECT * from user_account.addresses where user_id=$1 ORDER BY id DESC;`
