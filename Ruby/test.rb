class Test
	attr_accessor :name

	def initialize(name = "World")
		@name = name
	end

	def say_hi
		puts "Hello #{@name}!"
	end

	if __FILE__ == $0
		tester = Test.new
		tester.say_hi
		tester.name = "Caleb"
		tester.say_hi
		test2 = Test.new("Bob")
		test2.say_hi
	end
end