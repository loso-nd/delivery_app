# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Booking.destroy_all
Company.destroy_all

puts "Creating users..."
aqualad = User.create(username: 'Aqualad', email: 'aqualad@justice.com')
robin = User.create(username: 'Robin', email: 'robin@justice.com')
kidFlash = User.create(username: 'KidFlash', email: 'kidflash@justice.com')
artemis = User.create(username: 'Artemis', email: 'artemis@justice.com')
superBoy = User.create(username: 'SuperBoy', email: 'superboy@justice.com')
megan = User.create(username: 'Megan', email: 'megan@justice.com')
zatana = User.create(username: 'Zatana', email: 'zatana@justice.com')
roquet = User.create(username: 'Roquet', email: 'roquet@justice.com')


puts "Creating companies..."
sorcery = Company.create(company_name: 'Tower of Fate', speciality: "Catering", ratings: 4.8, image_url:'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png')
wayneTower = Company.create(company_name: 'Wayne Tower', speciality: "Technology", ratings: 5, image_url:'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png')
krypton = Company.create(company_name: 'Krypton', speciality: 'Automobiles', ratings: 4.9, image_url:'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png')
misticArts = Company.create(company_name: 'Mistic Arts', speciality: "Cross Country", ratings: 4.6, image_url:'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png')
queensGambit = Company.create(company_name: 'Queens Gambit', speciality: "Produce & Goods", ratings: 4.7, image_url:'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png')

puts "Creating bookings..."
book1 = Booking.create(user_id: aqualad.id, company_id: krypton.id, pickup_location: 'Atlantis', destination: 'Paris', time: 5 , ship_status: '3-day', speciality: "Catering")
book2 = Booking.create(user_id: zatana.id, company_id: misticArts.id, pickup_location: 'Tower of Fate', destination: 'Metropolis', time: 6, ship_status: 'Standard', speciality: "Fragile Items")
book3 = Booking.create(user_id: robin.id, company_id: wayneTower.id , pickup_location: 'Gotham', destination: 'Rome', time: 3, ship_status: '3-day', speciality: "Catering")
book4 = Booking.create(user_id: superBoy.id, company_id: sorcery.id , pickup_location: 'Fortress of Solitude', destination: 'Beligum', time: 8, ship_status: 'Rush', speciality: "Automobiles")
book5 = Booking.create(user_id: artemis.id, company_id: queensGambit.id, pickup_location: 'Argo City', destination: 'Columbia',time: 11, ship_status: '3-day', speciality: "Produce & Goods")

puts "Done Seeding..."