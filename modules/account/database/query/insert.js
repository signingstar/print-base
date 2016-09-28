export const addUserAddress = `INSERT INTO user_account.addresses
  (user_id, address_line1, address_line2, category, city, state, zipcode, country, landmark)
  VALUES ($1, $2, $3, 'primary', $4, $5, $6, 'India', $7)
  RETURNING id`
