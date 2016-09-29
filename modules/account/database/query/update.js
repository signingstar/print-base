export const userInfo = `UPDATE user_account.users
  SET first_name=$2, last_name=$3, email=$4, phone_number=$5
  WHERE id=$1`

export const userAddress = `UPDATE user_account.addresses
  SET address_line1=$3, address_line2=$4, city=$5, state=$6, zipcode=$7, landmark=$8
  WHERE id=$2 AND user_id=$1`

export const userPassword = `UPDATE user_account.logins SET password=crypt($2, gen_salt('bf',8)) WHERE user_id=$1`
