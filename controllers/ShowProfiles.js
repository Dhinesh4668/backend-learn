const User = require('../models/UserModal');

const showProfiles = async (req,res) =>{
    const filter = req.query
    try{
        const Profiles = await User.find(filter);

        // no profiles found measn
        if(Profiles.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No profiles found matching the given criteria",
                data: []
            })
        }

       return  res.status(200).json({
            success: true,
            message: "filterd profiles",
            data: Profiles
        })
    }catch (e) {
       return  res.status(500).json({
            success: false,
            message: 'internal server error',
            error: e
        })
    }
}

module.exports = showProfiles



//ref code
// const User = require('../models/UserModal');
//
// const showProfiles = async (req, res) => {
//     const filter = req.query;
//
//     try {
//         const currentUserInterests = []; // Assume this array contains the current user's interests
//         const Profiles = await User.find(filter);
//
//         if (Profiles.length === 0) {
//             return res.status(404).json({
//                 success: false,
//                 message: "No profiles found matching the given criteria",
//                 data: []
//             });
//         }
//
//         // Calculate matching percentages for each profile
//         const profilesWithMatching = Profiles.map(profile => {
//             const matchingPercentage = calculateMatchingPercentage(currentUserInterests, profile.interests);
//             return { ...profile._doc, matchingPercentage };
//         });
//
//         // Sort profiles based on matching percentages in descending order
//         profilesWithMatching.sort((a, b) => b.matchingPercentage - a.matchingPercentage);
//
//         // Divide profiles into different categories based on matching percentages
//         const categories = {
//             '50%': [],
//             '30%': [],
//             '20%': []
//         };
//
//         profilesWithMatching.forEach(profile => {
//             if (profile.matchingPercentage >= 50) {
//                 categories['50%'].push(profile);
//             } else if (profile.matchingPercentage >= 30) {
//                 categories['30%'].push(profile);
//             } else {
//                 categories['20%'].push(profile);
//             }
//         });
//
//         return res.status(200).json({
//             success: true,
//             message: "Filtered profiles",
//             data: categories
//         });
//     } catch (error) {
//         console.error("Error in fetching profiles:", error);
//         return res.status(500).json({
//             success: false,
//             message: 'Internal server error',
//             error: error.message
//         });
//     }
// };
//
// // Function to calculate matching percentage between two interest arrays
// function calculateMatchingPercentage(currentUserInterests, profileInterests) {
//     const commonInterests = currentUserInterests.filter(interest => profileInterests.includes(interest));
//     return (commonInterests.length / currentUserInterests.length) * 100;
// }
//
// module.exports = showProfiles;
