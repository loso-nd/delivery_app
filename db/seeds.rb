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
aqualad = User.create(username: 'Aqualad', password: '1234',  email: 'aqualad@justice.com')
robin = User.create(username: 'Robin', password: '1234', email: 'robin@justice.com')
kidFlash = User.create(username: 'KidFlash', password: '1234', email: 'kidflash@justice.com')
artemis = User.create(username: 'Artemis', password: '1234', email: 'artemis@justice.com')
superBoy = User.create(username: 'SuperBoy', password: '1234', email: 'superboy@justice.com')
megan = User.create(username: 'Megan', password: '1234', email: 'megan@justice.com')
zatana = User.create(username: 'Zatana', password: '1234', email: 'zatana@justice.com')
roquet = User.create(username: 'Roquet', password: '1234', email: 'roquet@justice.com')


puts "Creating companies..."
sorcery = Company.create(company_name: 'Tower of Fate', speciality: "Catering", ratings: 4.8)
wayneTower = Company.create(company_name: 'Wayne Tower', speciality: "Technology", ratings: 5)
krypton = Company.create(company_name: 'Krypton', speciality: 'Automobiles', ratings: 4.9)
misticArts = Company.create(company_name: 'Mistic Arts', speciality: "Cross Country", ratings: 4.6)
queensGambit = Company.create(company_name: 'Queens Gambit', speciality: "Produce & Goods", ratings: 4.7)

puts "Creating bookings..."
book1 = Booking.create(user_id: aqualad.id, company_id: krypton.id, pickup: 'Atlantis', destination: 'Paris', time: 5 , status: '3-day', speciality: "Catering")
book2 = Booking.create(user_id: zatana.id, company_id: misticArts.id, pickup: 'Tower of Fate', destination: 'Metropolis', time: 6, status: 'Standard', speciality: "Fragile Items")
book3 = Booking.create(user_id: robin.id, company_id: wayneTower.id , pickup: 'Gotham', destination: 'Rome', time: 3, status: '3-day', speciality: "Catering")
book4 = Booking.create(user_id: superBoy.id, company_id: sorcery.id , pickup: 'Fortress of Solitude', destination: 'Beligum', time: 8, status: 'Rush', speciality: "Automobiles")
book5 = Booking.create(user_id: artemis.id, company_id: queensGambit.id, pickup: 'Argo City', destination: 'Columbia',time: 11, status: '3-day', speciality: "Produce & Goods")

puts "Done Seeding..."