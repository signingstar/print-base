export const updateUserInfo = `UPDATE user_account.users
  SET first_name=$1, last_name=$2, email=$3, phone_number=$4
  WHERE id=$5`

  export const updateUserAddress = `UPDATE user_account.addresses
    SET address_line1=$1, address_line2=$2, city=$3, state=$4, zipcode=$5, landmark=$6
    WHERE id=$7`
