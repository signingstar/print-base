export const getUserInfo = `
  SELECT id, first_name, last_name, phone_number, email
  FROM user_account.users
  WHERE id=$1;
  `

export const getUserAddress = `
  SELECT id, address_line1, address_line2, city, state, country, zipcode, landmark, category
  FROM user_account.addresses
  WHERE user_id=$1 and active=true
  ORDER BY id DESC;`
